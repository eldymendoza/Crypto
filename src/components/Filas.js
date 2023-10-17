import React from "react";

const Filas = ({ coin, index }) => {
    return (
        <tr key={coin.name}>
            <td>{index + 1}</td>
            <td>
                <img src={coin.image} alt={coin.image} style={{ width: '10%', height: "50%" }} className="img-fluid me-2" />
                <span>{coin.name}</span>
                <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
            </td>
            <td>{coin.current_price.toLocaleString()}</td>
            <td className={coin.price_change_percentage_1h_in_currency > 0 ? "text-success" : "text-danger"}
            >{coin.price_change_percentage_1h_in_currency.toFixed(1)}%</td>
            <td className={coin.price_change_percentage_24h_in_currency > 0 ? "text-success" : "text-danger"}
            >{coin.price_change_percentage_24h_in_currency.toFixed(1)}%</td>
            <td className={coin.price_change_percentage_7d_in_currency > 0 ? "text-success" : "text-danger"}
            >{coin.price_change_percentage_7d_in_currency.toFixed(1)}%</td>
            <td>{coin.total_volume.toLocaleString()}</td>
            <td>{coin.market_cap.toLocaleString()}</td>
            <td>{ }</td>
        </tr>
    );

}

export default Filas;