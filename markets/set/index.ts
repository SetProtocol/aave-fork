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
  MarketId: 'Set market',
  ProviderId: 2,
  ReservesConfig: {
    SetDAI: strategyDAI,
    DPI: strategyDPI,
    SetUSDC: strategyUSDC,
    SetUSDT: strategyUSDT,
    SetWETH: strategyWETH,
  },
  ReserveAssets: {
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.coverage]: {},
    [EthereumNetwork.kovan]: {
      SetDAI: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
      DPI: '',
      SetUSDC: '0xe22da380ee6B445bb8273C81944ADEB6E8450422',
      SetUSDT: '0x13512979ADE267AB5100878E2e0f485B568328a4',
      SetWETH: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    },
    [EthereumNetwork.ropsten]: {
      SetDAI: '0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108',
      DPI: ZERO_ADDRESS,
      SetUSDC: '0x851dEf71f0e6A903375C1e536Bd9ff1684BAD802',
      SetUSDT: '0xB404c51BBC10dcBE948077F18a4B8E553D160084',
      SetWETH: '0xc778417e063141139fce010982780140aa0cd5ab',
    },
    [EthereumNetwork.main]: {
      SetDAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      DPI: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
      SetUSDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      SetUSDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      SetWETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    },
    [EthereumNetwork.tenderlyMain]: {
      SetDAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      DPI: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
      SetUSDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      SetUSDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      SetWETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    },
  },
};

export default SetConfig;
