import * as React from 'react';
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

    useEffect(async () => {

            const dados = await (await fetch("https://6151da0a4a5f22001701d4da.mockapi.io/sevenapps")).json();
    
            dados.forEach((item, i) => {
                item.id = i + 1;
            });
    
            setRows(dados)
    
    }, [])

   

    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={11}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
