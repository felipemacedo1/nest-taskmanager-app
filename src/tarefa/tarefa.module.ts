import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports: [],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class TarefaModule {}