import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';


export default function Read() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 130,
        }
    ];


    const [rows, setRows] = useState([])

    useEffect(() => {

        async function getData() {
            const data = await(await fetch("https://6151da0a4a5f22001701d4da.mockapi.io/sevenapps")).json();

            data.forEach((item, i) => {
                item.id = i + 1;
            });

            console.log(data)

            setRows(data)
        }

        getData();

    }, [])



    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}
