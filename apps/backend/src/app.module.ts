import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { FarmerModule } from "./modules/farmer/farmer.module"
import { FarmModule } from "./modules/farm/farm.module"
import { CropModule } from "./modules/crop/crop.module"
import { ExtensionModule } from "./modules/extension/extension.module"
import { SubsidyModule } from "./modules/subsidy/subsidy.module"
import { DataPrivacyModule } from "./modules/dataprivacy/dataprivacy.module"

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FarmerModule, FarmModule, CropModule, ExtensionModule, SubsidyModule, DataPrivacyModule,
  ],
})
export class AppModule {}