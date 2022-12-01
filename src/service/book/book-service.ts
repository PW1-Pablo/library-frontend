import { httpService } from "../../commons";
import { BookDto } from "../../dto";
import { ServiceError } from "../../error";

export const getBooks = async (): Promise<BookDto[]> => {
    try {
        const result = await httpService.get<BookDto[]>('/book')
        return result
    } catch (error: Error | any) {
        throw new ServiceError("Não foi possivel obter a lista de livros.")
    }
}