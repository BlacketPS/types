import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class AuctionsBidAuctionDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(999999999)
    readonly amount: number;
}

export default AuctionsBidAuctionDto;
