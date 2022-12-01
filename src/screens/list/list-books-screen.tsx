import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookDto } from "../../dto";
import { bookService } from "../../service";

const ListBooks = () => {
    const [books, setBooks] = useState<BookDto[]>([])
    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate()

    const loadBooks = useCallback(async () => {
        try {
            const result = await bookService.getBooks()
            setBooks(result)
        } catch (error: Error | any) {
            setErrorMessage(error.message)
        }
    }, [])

    const addNewBook = () => {
        navigate('/register')
    }

    useEffect(() => {
        loadBooks();
    }, [loadBooks])

    return (
        <>
            <table width="90%" border={1}>
                <thead>
                    <tr>
                        <th style={{ width: "30%" }}>Titulo</th>
                        <th style={{ width: "25%" }}>Autor</th>
                        <th style={{ width: "10%" }}>Edição</th>
                        <th style={{ width: "10%" }}>Paginas</th>
                        <th style={{ width: "15%" }}>Sumário</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.edition}</td>
                                <td>{book.pages}</td>
                                <td>{book.summary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                {errorMessage}
            </div>
            <input type="button" value="Novo Livro" onClick={addNewBook}/>
        </>
    )
}

export default ListBooks