import { oc } from "@orpc/contract"
import { farmerContract } from "./modules/farmer/farmer.contract.js"
import { farmContract } from "./modules/farm/farm.contract.js"
import { cropContract } from "./modules/crop/crop.contract.js"
import { extensionContract } from "./modules/extension/extension.contract.js"
import { subsidyContract } from "./modules/subsidy/subsidy.contract.js"
import { dataprivacyContract } from "./modules/dataprivacy/dataprivacy.contract.js"

export const contract = oc.router({
  farmer: farmerContract,
  farm: farmContract,
  crop: cropContract,
  extension: extensionContract,
  subsidy: subsidyContract,
  dataprivacy: dataprivacyContract,
})