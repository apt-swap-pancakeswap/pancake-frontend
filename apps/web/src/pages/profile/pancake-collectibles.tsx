import { GetStaticProps, InferGetStaticPropsType } from 'next'
// eslint-disable-next-line camelcase
import { unstable_serialize, SWRConfig } from 'swr'
import { getCollections } from 'state/nftMarket/helpers'
import PancakeCollectiblesPageRouter from 'views/Profile/components/PancakeCollectiblesPageRouter'
import { pancakeProfileABI } from 'config/abi/pancakeProfile'
import { profileContract, profileContractArgs } from 'utils/contractHelpers'
import { viemServerClients } from 'utils/viem.server'
import { ChainId } from '@pancakeswap/sdk'
import { ContractFunctionResult } from 'viem'

const PancakeCollectiblesPage = ({ fallback = {} }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig
      value={{
        fallback,
      }}
    >
      <PancakeCollectiblesPageRouter />
    </SWRConfig>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchedCollections = await getCollections()
  if (!fetchedCollections || !Object.keys(fetchedCollections).length) {
    return {
      props: {
        fallback: {},
      },
      revalidate: 60,
    }
  }

  try {
    const nftRole = await profileContract.read.NFT_ROLE()

    const collectionRoles = (await viemServerClients[ChainId.BSC].multicall({
      contracts: Object.keys(fetchedCollections).map((collectionAddress) => {
        return {
          abi: pancakeProfileABI,
          address: profileContractArgs.address,
          functionName: 'hasRole',
          params: [nftRole, collectionAddress],
        }
      }),
      allowFailure: false,
    })) as ContractFunctionResult<typeof pancakeProfileABI, 'hasRole'>[]

    const pancakeCollectibles = Object.values(fetchedCollections).filter((collection, index) => {
      return collectionRoles[index]
    })

    return {
      props: {
        fallback: {
          [unstable_serialize(['pancakeCollectibles'])]: pancakeCollectibles,
        },
      },
      revalidate: 60 * 60 * 12, // 12 hours
    }
  } catch (error) {
    return {
      props: {
        fallback: {},
      },
      revalidate: 60,
    }
  }
}

export default PancakeCollectiblesPage
