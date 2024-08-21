import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { AuctionTypeEnum } from "../../interfaces";

export class AuctionsCreateAuctionDto {
    @IsNotEmpty()
    @IsEnum(AuctionTypeEnum)
    readonly type: AuctionTypeEnum;

    @IsOptional()
    @IsNumber()
    readonly blookId?: number;

    @IsOptional()
    @IsNumber()
    readonly itemId?: number;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @IsNotEmpty()
    @IsNumber()
    readonly duration: number;
}

export default AuctionsCreateAuctionDto;
