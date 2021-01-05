import { oneRay, ZERO_ADDRESS } from '../../helpers/constants';
import { ISetConfiguration, EthereumNetwork, eEthereumNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyDAI,
  strategyDPI,
  strategyUSDC,
  strategyUSDT,
  strategyWETH,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const SetConfig: ISetConfiguration = {
  ...CommonsConfig,
  MarketId: 'Aave genesis market',
  ProviderId: 1,
  ReservesConfig: {
    DAI: strategyDAI,
    DPI: strategyDPI,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    WETH: strategyWETH,
  },
  ReserveAssets: {
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.coverage]: {},
    [EthereumNetwork.kovan]: {
      DAI: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
      DPI: '',
      USDC: '0xe22da380ee6B445bb8273C81944ADEB6E8450422',
      USDT: '0x13512979ADE267AB5100878E2e0f485B568328a4',
      WETH: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    },
    [EthereumNetwork.ropsten]: {
      DAI: '0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108',
      DPI: ZERO_ADDRESS,
      USDC: '0x851dEf71f0e6A903375C1e536Bd9ff1684BAD802',
      USDT: '0xB404c51BBC10dcBE948077F18a4B8E553D160084',
      WETH: '0xc778417e063141139fce010982780140aa0cd5ab',
    },
    [EthereumNetwork.main]: {
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      DPI: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    },
    [EthereumNetwork.tenderlyMain]: {
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      DPI: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    },
  },
};

export default SetConfig;
