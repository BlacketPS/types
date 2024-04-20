import { Blook } from "src/models";

export interface OpenPackBlook extends Pick<Blook, "id"> {
	id: number;
}