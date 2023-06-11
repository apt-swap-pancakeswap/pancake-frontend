import { AptosCoin, ChainId, Coin } from '@pancakeswap/aptos-swap-sdk'

export const APT = {
  [ChainId.TESTNET]: AptosCoin.onChain(ChainId.TESTNET),
  [ChainId.MAINNET]: AptosCoin.onChain(ChainId.MAINNET),
}

export const L0_USDC = {
  [ChainId.MAINNET]: new Coin(
    ChainId.MAINNET,
    '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC',
    6,
    'lzUSDC',
    'USD coin',
  ),
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0x8c805723ebc0a7fc5b7d3e7b75d567918e806b3461cb9fa21941a9edc0220bf::devnet_coins::DevnetUSDC',
    8,
    'lzUSDC',
    'USD coin',
  ),
}

export const CE_USDC_MAINNET = new Coin(
  ChainId.MAINNET,
  '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin',
  6,
  'ceUSDC',
  'Celer - USD Coin',
)

export const WH_USDC_MAINNET = new Coin(
  ChainId.MAINNET,
  '0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T',
  6,
  'whUSDC',
  'Wormhole - USD Coin',
)

export const CAKE = {
  [ChainId.MAINNET]: new Coin(
    ChainId.MAINNET,
    '0x159df6b7689437016108a019fd5bef736bac692b6d4a1f10c941f6fbb9a74ca6::oft::CakeOFT',
    8,
    'CAKE',
    'PancakeSwap Token',
  ),
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xe0e5ad285cbcdb873b2ee15bb6bcac73d9d763bcb58395e894255eeecf3992cf::pancake::Cake',
    8,
    'CAKE',
    'PancakeSwap Token',
  ),
}

export const CE_BNB_MAINNET = new Coin(
  ChainId.MAINNET,
  '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::BnbCoin',
  8,
  'ceBNB',
  'Celer - Binance Coin',
)

export const USD = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::USD',
    8,
    'USD',
    'USDcoin',
  ),
}

export const BTC = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::BTC',
    8,
    'BTC',
    'BTCcoin',
  ),
}

export const AAA = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::AAA',
    8,
    'AAA',
    'AAAcoin',
  ),
}

export const BBB = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::BBB',
    8,
    'BBB',
    'BBBcoin',
  ),
}

export const CCC = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::CCC',
    8,
    'CCC',
    'CCCcoin',
  ),
}

export const DDD = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::DDD',
    8,
    'DDD',
    'DDDcoin',
  ),
}

export const EEE = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::EEE',
    8,
    'EEE',
    'EEEcoin',
  ),
}

export const FFF = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::FFF',
    8,
    'FFF',
    'FFFcoin',
  ),
}

export const GGG = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::GGG',
    8,
    'GGG',
    'GGGcoin',
  ),
}

export const HHH = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::HHH',
    8,
    'HHH',
    'HHHcoin',
  ),
}

export const III = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::III',
    8,
    'III',
    'IIIcoin',
  ),
}

export const JJJ = {
  [ChainId.TESTNET]: new Coin(
    ChainId.TESTNET,
    '0xb57ddb773fd1221ca225de3f04bcc5c6cd80a79cf7d74ed2c4b6ee812d2a2438::testcoins::JJJ',
    8,
    'JJJ',
    'JJJcoin',
  ),
}
