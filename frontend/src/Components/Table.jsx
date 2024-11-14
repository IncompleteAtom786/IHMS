import PropTypes from 'prop-types';

const Table = ({ columns, data, deleteFunction }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                    <tr className="bg-gray-800 border-b">
                        {columns.map((column, index) => (
                            <th key={index} className="px-4 py-2 text-left text-blue-500">
                                {column}
                            </th>
                        ))}
                        <th className="px-4 py-2 text-left text-blue-500">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b hover:bg-gray-200 bg-gray-50">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-2">
                                    {cell}
                                </td>
                            ))}
                            <td>
                                <button className="text-red-500" onClick={()=> {
                                    deleteFunction(row[0]);
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
Table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.array).isRequired,
    deleteFunction: PropTypes.func.isRequired
};

export default Table;
