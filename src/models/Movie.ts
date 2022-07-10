import Genre from "./Genre";

export default interface Movie {
    id: number;
    title: string;
    runtime: number;
    mpaaRating: string;
    genres: Genre[];
}