import React from 'react'

function TableZebra() {
    return (
<div className="max-w-[90vw] w-full mx-auto bg-blue-950/80 rounded-xl shadow-md p-4 box-border overflow-hidden">
  <table className="table w-full text-center text-white">
    <thead className="bg-[#0c1231] text-lg text-white">
      <tr>
        <th className="hidden sm:table-cell w-12">#</th>
        <th>Abbreviation</th>
        <th>Name</th>
      </tr>
    </thead>

    <tbody className="[&>tr:nth-child(odd)]:bg-blue-900/60 [&>tr:nth-child(even)]:bg-[#131e53] text-base sm:text-lg transition-colors">
      <tr>
        <th className="hidden sm:table-cell">1</th>
        <td>GF</td>
        <td>GoonForce</td>
      </tr>
      <tr>
        <th className="hidden sm:table-cell">2</th>
        <td>ROK</td>
        <td>Rokstars</td>
      </tr>
      <tr>
        <th className="hidden sm:table-cell">3</th>
        <td>GCN</td>
        <td>Goon Cube Network</td>
      </tr>
      <tr>
        <th className="hidden sm:table-cell">4</th>
        <td>FSN</td>
        <td>Fusion</td>
      </tr>
      <tr>
        <th className="hidden sm:table-cell">5</th>
        <td>DUMFUKS</td>
        <td>Dumfuks</td>
      </tr>
      <tr>
        <th className="hidden sm:table-cell">6</th>
        <td>TFU</td>
        <td>The Funky Uncles</td>
      </tr>
      <tr>
        <th className="hidden sm:table-cell">7</th>
        <td>BH</td>
        <td>Bleeding Hearts</td>
      </tr>
      <tr>
        <th className="hidden sm:table-cell">8</th>
        <td>J.E.T</td>
        <td>Jet</td>
      </tr>
      <tr>
        <th className="hidden sm:table-cell">9</th>
        <td>AEROSOUL</td>
        <td>Aerosoul</td>
      </tr>
      <tr>
        <th className="hidden sm:table-cell">10</th>
        <td>T100</td>
        <td>Top 100 Cafe</td>
      </tr>
    </tbody>
  </table>
</div>

    )
}

export default TableZebra