import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useState } from 'react';


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

    const dados = []

    getNames();

    async function getNames() {
        const response = await axios({
            url: "https://6151da0a4a5f22001701d4da.mockapi.io/sevenapps",
            method: "GET"
        })
        dados.push(response.data)

        dados[0].forEach((item, i) => {
            item.id = i + 1;
        });

        setRows(dados[0])
    }

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
