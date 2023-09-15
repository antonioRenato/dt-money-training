import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighligth, TransactionContainer, TransactionTable } from "./styles";

export function Transaction(){
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <PriceHighligth variant="income">
                  R$ 12.000,00
                </PriceHighligth>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Hambuguer</td>
              <td>
                <PriceHighligth variant="outcome">
                  - R$ 59,00
                </PriceHighligth>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}