import {
  Field,
  SmartContract,
  state,
  State,
  method,
  DeployArgs,
  Permissions,
} from 'snarkyjs';

export class StableCoin extends SmartContract {
  // only the centralized oracle signer can update this
  @state(Field) minaUsdOraclePrice = State<Field>();
  @state(Field) balancesMerkelRoot = State<Field>();
  @state(Field) cdpMerkelRoot = State<Field>();

  deploy(args: DeployArgs) {
    super.deploy(args);
    this.setPermissions({
      ...Permissions.default(),
      editState: Permissions.proofOrSignature(),
    });
  }

  @method init() {
    //this.num.set(Field(1));
  }

  @method depositIntoTrove() {
    // input = markel path to troveId
  }

  @method mintStableCoin() {}

  @method repayDebt() {}

  @method withdrawMina() {}

  @method liquidate() {}

  @method transferStable() {}

  @method updateOracle() {}
}
