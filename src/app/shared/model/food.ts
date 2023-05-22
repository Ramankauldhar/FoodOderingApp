export class Foods{
    id!: number;
    name!: String;
    origins?: String[];
    tags?: String[];
    price!: number;
    favorite: boolean = false;
    rating: number = 0;
    imageUrl!: String;
}