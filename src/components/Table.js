import React from "react";
import Filas from "./Filas";

const titulos = [
    "#",
    "Coins",
    "Price",
    "1h",
    "24h",
    "7d",
    "24h Volume",
    "Mkt Cap",
    "Last 7 days",
]

const Table = ({ coins, search }) => {
    const filteredCoins = coins.filter(
        coin =>
            coin.name.toLowerCase().includes(search.toLowerCase()) |
            coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <table className="table">
            <thead>
                {(() => {
                    const cells = [];
                    titulos.forEach((titulos, index) => {
                        cells.push(<td key={index}>{titulos}</td>)
                    })
                    return (cells);
                })()}
            </thead>
            <tbody>
                {
                    filteredCoins.map((coin, index) => (
                        <Filas coin={coin} key={index} index={index} />
                    ))
                }
            </tbody>
        </table>
    );
}
export default Table;