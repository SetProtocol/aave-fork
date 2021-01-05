import {task} from 'hardhat/config';
import {deployAllMockTokens} from '../../helpers/contracts-deployments';
import {rawInsertContractAddressInDb} from '../../helpers/contracts-helpers';
import {ConfigNames, loadPoolConfig,} from '../../helpers/configuration';

task('dev:deploy-mock-tokens', 'Deploy mock tokens for dev enviroment')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .addParam('pool', `Pool name to retrieve configuration, supported: ${Object.values(ConfigNames)}`)
  .setAction(async ({verify, pool}, localBRE) => {
    const poolConfig = loadPoolConfig(pool);
    await localBRE.run('set-DRE');
    const tokens = await deployAllMockTokens(poolConfig, verify);
    for (let i =0; i < Object.keys(tokens).length; i++) {
      let token = Object.keys(tokens)[i];
      rawInsertContractAddressInDb(token, tokens[token].address);
    }
  });
