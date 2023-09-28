import TableRow from "./tableRow";

export default function ExpensesTable() {
    return(
        <table>
            <tr>
                <th>S/N</th>
                <th>EXPENSE</th>
                <th>AMOUNT (USD)</th>
                <th>PAID TO</th>
                <th>EXPENSE TYPE</th>
                <th>DATE</th>
                <th></th>
            </tr>
            <TableRow no={1} expense={`Building maintainance`} amount={500.00} paidto={`Sacony Construction`} expenseType={'Mortage'} date={'2020-01-30'}/>
        </table>
    )
}