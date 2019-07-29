import React, { PureComponent } from 'react';
import styles from './index.module.less';

export default class ASIC extends PureComponent {
  render() {
    return (
      <div className={styles.tableWrap}>
        <h3>
          Bitcoin <a href="https://en.bitcoin.it/wiki/Protocol_specification#Hashes" title="Protocol specification" className="mw-redirect">double SHA256</a> ASIC mining hardware
        </h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th data-sort-type="text" className="headerSort headerSortUp" tabIndex="0" role="columnheader button" title="Sort ascending"> Product </th>
              <th data-sort-type="number" className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Advertised Mhash/s </th>
              <th data-sort-type="number" className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Mhash/J </th>
              <th data-sort-type="number" className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Mhash/s/$ </th>
              <th data-sort-type="number" className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Watts </th>
              <th data-sort-type="currency" className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Price (USD) </th>
              <th data-sort-type="date" className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Currently shipping </th>
              <th className="unsortable" title="Sort ascending"> Comm ports </th>
              <th className="unsortable" title="Sort ascending"> Dev-friendly </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> WhatsMiner M3
              </th>
              <td> 11,500,000 </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td> 1785 </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableYes}>Yes </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}> </td>
            </tr>
            <tr>
              <th> WhatsMiner M2
              </th>
              <td> 9,200,000 </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td> 2046 </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}> </td>
            </tr>
            <tr>
              <th> WhatsMiner M1
              </th>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}> </td>
            </tr>
            <tr>
              <th> Twinfury
              </th>
              <td> 4,500 </td>
              <td> 1174 </td>
              <td> 20 </td>
              <td> 3.83 </td>
              <td> 216 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> TerraHash Klondike 64 <sup id="cite_ref-Klondike64_37-0" className="reference"><a href="https://en.bitcoin.it#cite_note-Klondike64-37">[37]</a></sup>
              </th>
              <td> 18,000 </td>
              <td> 140 </td>
              <td> 20 </td>
              <td> 127 </td>
              <td> 900 </td>
              <td className={styles.tableNo}> No </td>
              <td> USB </td>
              <td className={styles.tableWarn}>samples </td>
            </tr>
            <tr>
              <th> TerraHash Klondike 16 <sup id="cite_ref-Klondike16_36-0" className="reference"><a href="https://en.bitcoin.it#cite_note-Klondike16-36">[36]</a></sup>
              </th>
              <td> 4,500 </td>
              <td> 140 </td>
              <td> 18 </td>
              <td> 32</td>
              <td> 250 </td>
              <td className={styles.tableNo}> No </td>
              <td> USB </td>
              <td className={styles.tableWarn}>samples </td>
            </tr>
            <tr>
              <th> TerraHash DX Mini (full)
              </th>
              <td> 90,000 </td>
              <td> 140 </td>
              <td> 15 </td>
              <td> 640 </td>
              <td> 6000 </td>
              <td className={styles.tableNo}> No </td>
              <td> USB </td>
              <td className={styles.tableWarn}> </td>
            </tr>
            <tr>
              <th> TerraHash DX Large (full)
              </th>
              <td> 180,000 </td>
              <td> 140 </td>
              <td> 17.14 </td>
              <td> 1,280 </td>
              <td> 10500 </td>
              <td className={styles.tableNo}> No </td>
              <td> USB </td>
              <td className={styles.tableWarn}> </td>
            </tr>
            <tr>
              <th> Spondooliestech SP35 Yukon<sup id="cite_ref-SP35_Yukon_35-0" className="reference"><a href="https://en.bitcoin.it#cite_note-SP35_Yukon-35">[35]</a></sup>
              </th>
              <td> 5,500,000 </td>
              <td> 1506 </td>
              <td> 2460 </td>
              <td> 3650 </td>
              <td> 2235 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>code </td>
            </tr>
            <tr>
              <th> Spondooliestech SP31 Yukon<sup id="cite_ref-SP31_Yukon_34-0" className="reference"><a href="https://en.bitcoin.it#cite_note-SP31_Yukon-34">[34]</a></sup>
              </th>
              <td> 4,900,000 </td>
              <td> 1633 </td>
              <td> 2361 </td>
              <td> 3000 </td>
              <td> 2075 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>code </td>
            </tr>
            <tr>
              <th> Spondooliestech SP30 Yukon<sup id="cite_ref-SP30_Yukon_33-0" className="reference"><a href="https://en.bitcoin.it#cite_note-SP30_Yukon-33">[33]</a></sup>
              </th>
              <td> 4,500,000 </td>
              <td> 1500 </td>
              <td> 1068 </td>
              <td> 3000 </td>
              <td> 4121 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> Spondooliestech SP20 Jackson<sup id="cite_ref-SP20_32-0" className="reference"><a href="https://en.bitcoin.it#cite_note-SP20-32">[32]</a></sup>
              </th>
              <td> 1,700,000 </td>
              <td> 1545 </td>
              <td> 1299 </td>
              <td> 1100 </td>
              <td> 1309<sup id="cite_ref-nopsu_2-16" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> Spondooliestech SP10 Dawson<sup id="cite_ref-SP10_31-0" className="reference"><a href="https://en.bitcoin.it#cite_note-SP10-31">[31]</a></sup>
              </th>
              <td> 1,400,000 </td>
              <td> 1120 </td>
              <td> 492 </td>
              <td> 1250 </td>
              <td> 2845 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> ROCKMINER T1 800G<sup id="cite_ref-rockminer_30-5" className="reference"><a href="https://en.bitcoin.it#cite_note-rockminer-30">[30]</a></sup>
              </th>
              <td> 800,000 </td>
              <td> 800 </td>
              <td> 2462 </td>
              <td> 1000 </td>
              <td> 325<sup id="cite_ref-nopsu_2-15" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> ROCKMINER Rocket BOX <sup id="cite_ref-rockminer_30-2" className="reference"><a href="https://en.bitcoin.it#cite_note-rockminer-30">[30]</a></sup>
              </th>
              <td> 450,000 </td>
              <td> 937</td>
              <td> 750 </td>
              <td> 480 </td>
              <td> 599<sup id="cite_ref-nopsu_2-12" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> RPi GPIO </td>
              <td className={styles.tableWarn}> </td>
            </tr>
            <tr>
              <th> ROCKMINER R4-BOX<sup id="cite_ref-rockminer_30-1" className="reference"><a href="https://en.bitcoin.it#cite_note-rockminer-30">[30]</a></sup>
              </th>
              <td> 470,000 </td>
              <td> 1000 </td>
              <td> 2238 </td>
              <td> 470 </td>
              <td> 210<sup id="cite_ref-nopsu_2-11" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> ROCKMINER R3-BOX<sup id="cite_ref-rockminer_30-0" className="reference"><a href="https://en.bitcoin.it#cite_note-rockminer-30">[30]</a></sup>
              </th>
              <td> 450,000 </td>
              <td> 1000 </td>
              <td> 2250 </td>
              <td> 450 </td>
              <td> 200<sup id="cite_ref-nopsu_2-10" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> ROCKMINER R-BOX<sup id="cite_ref-rockminer_30-3" className="reference"><a href="https://en.bitcoin.it#cite_note-rockminer-30">[30]</a></sup>
              </th>
              <td> 32,000 </td>
              <td> 711 </td>
              <td> 500 </td>
              <td> 45 </td>
              <td> 65<sup id="cite_ref-nopsu_2-13" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> ROCKMINER R-BOX 110G<sup id="cite_ref-rockminer_30-4" className="reference"><a href="https://en.bitcoin.it#cite_note-rockminer-30">[30]</a></sup>
              </th>
              <td> 110,000 </td>
              <td> 917 </td>
              <td> 1250 </td>
              <td> 120 </td>
              <td> 88<sup id="cite_ref-nopsu_2-14" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> Red/BlueFury
              </th>
              <td> 2,600 </td>
              <td> 1040 </td>
              <td> 4 </td>
              <td> 2.5 </td>
              <td> 640 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> NanoFury NF2
              </th>
              <td> 3,700 </td>
              <td> 740 </td>
              <td> 74 </td>
              <td> 5 </td>
              <td> 50 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, docs, samples </td>
            </tr>
            <tr>
              <th> NanoFury / IceFury
              </th>
              <td> 2,000 </td>
              <td> 800 </td>
              <td className={styles.tableWarn}> </td>
              <td> 2.5 </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, docs, samples </td>
            </tr>
            <tr>
              <th> Metabank
              </th>
              <td> 120,000 </td>
              <td> 705 </td>
              <td> 56 </td>
              <td> 170 </td>
              <td> 2160<sup id="cite_ref-29" className="reference"><a href="https://en.bitcoin.it#cite_note-29">[29]</a></sup> </td>
              <td className={styles.tableNo}> No </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> LittleFury
              </th>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/KnCMiner" title="KnCMiner">KnCMiner</a> Mercury
              </th>
              <td> 100,000 </td>
              <td className={styles.tableWarn}> </td>
              <td> 50.04 </td>
              <td> 250 </td>
              <td> 1995 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> KnC Saturn
              </th>
              <td> 250,000 </td>
              <td> 400</td>
              <td> 66 </td>
              <td> 300<sup id="cite_ref-nopsu_2-8" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td> 2995 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> KnC Neptune <sup id="cite_ref-KnC_Neptune_28-0" className="reference"><a href="https://en.bitcoin.it#cite_note-KnC_Neptune-28">[28]</a></sup>
              </th>
              <td> 3,000,000 </td>
              <td> 1429 </td>
              <td> 231 </td>
              <td> 2100 </td>
              <td> 12995 <sup id="cite_ref-KnC_Neptune_28-1" className="reference"><a href="https://en.bitcoin.it#cite_note-KnC_Neptune-28">[28]</a></sup></td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> KnC Jupiter
              </th>
              <td> 500,000 </td>
              <td> 400</td>
              <td> 80 </td>
              <td> 600<sup id="cite_ref-nopsu_2-9" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td> 4995 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> Klondike
              </th>
              <td> 5,200 </td>
              <td> 160 </td>
              <td> 260 </td>
              <td> 32 </td>
              <td> 20 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableWarn}>samples </td>
            </tr>
            <tr>
              <th> HashFast Sierra Evo 3
              </th>
              <td> 2,000,000 </td>
              <td> 909 </td>
              <td> 294 </td>
              <td> 2200 </td>
              <td> 6800 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableWarn}>docs </td>
            </tr>
            <tr>
              <th> HashFast Sierra
              </th>
              <td> 1,200,000 </td>
              <td> 909 </td>
              <td> 169 </td>
              <td> 1320 </td>
              <td> 7080 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> HashFast Baby Jet
              </th>
              <td> 400,000 </td>
              <td> 909 </td>
              <td> 71 </td>
              <td> 440 </td>
              <td> 5600 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet, USB </td>
              <td className={styles.tableWarn}>docs </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/HashCoins" title="HashCoins">HashCoins</a> Zeus v3
              </th>
              <td> 4,500,000<sup id="cite_ref-HCZ_27-0" className="reference"><a href="https://en.bitcoin.it#cite_note-HCZ-27">[27]</a></sup> </td>
              <td> xxxx </td>
              <td className={styles.tableWarn}> </td>
              <td> 3000<sup id="cite_ref-HCZ_27-1" className="reference"><a href="https://en.bitcoin.it#cite_note-HCZ-27">[27]</a></sup> </td>
              <td> 2299<sup id="cite_ref-HCZ_27-2" className="reference"><a href="https://en.bitcoin.it#cite_note-HCZ-27">[27]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableNo}> No </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/HashCoins" title="HashCoins">HashCoins</a> Apollo v3
              </th>
              <td> 1100,000<sup id="cite_ref-HCA_26-0" className="reference"><a href="https://en.bitcoin.it#cite_note-HCA-26">[26]</a></sup> </td>
              <td> xxxx </td>
              <td className={styles.tableWarn}> </td>
              <td> 1000<sup id="cite_ref-HCA_26-1" className="reference"><a href="https://en.bitcoin.it#cite_note-HCA-26">[26]</a></sup> </td>
              <td> 599<sup id="cite_ref-HCA_26-2" className="reference"><a href="https://en.bitcoin.it#cite_note-HCA-26">[26]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableNo}> No </td>
            </tr>
            <tr>
              <th> HashBuster Nano
              </th>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> HashBuster Micro
              </th>
              <td> 20,000 </td>
              <td> 869 </td>
              <td> 29 </td>
              <td> 23 </td>
              <td> 688 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Ebit" title="Ebit">Ebit</a> E9++ <sup id="cite_ref-EbitE9.2B.2B_24-0" className="reference"><a href="https://en.bitcoin.it#cite_note-EbitE9.2B.2B-24">[24]</a></sup>
              </th>
              <td> 14,000,000 </td>
              <td> 10500 </td>
              <td> 3600 </td>
              <td> 1330 </td>
              <td> 3880 </td>
              <td className={styles.tableYes}>Yes </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> No </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Ebit" title="Ebit">Ebit</a> E9+ <sup id="cite_ref-EbitE9.2B_23-0" className="reference"><a href="https://en.bitcoin.it#cite_note-EbitE9.2B-23">[23]</a></sup>
              </th>
              <td> 9,000,000 </td>
              <td> 6900 </td>
              <td> 6428 </td>
              <td> 1300 </td>
              <td> 1400 </td>
              <td className={styles.tableYes}>Yes </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> No </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Ebit" title="Ebit">Ebit</a> E9 <sup id="cite_ref-EbitE9_22-0" className="reference"><a href="https://en.bitcoin.it#cite_note-EbitE9-22">[22]</a></sup>
              </th>
              <td> 6,300,000 </td>
              <td> 7140 </td>
              <td> 4468 </td>
              <td> 882 </td>
              <td> 1410 </td>
              <td className={styles.tableNo}> No </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> No </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Ebit" title="Ebit">Ebit</a> E10 <sup id="cite_ref-EbitE10_25-0" className="reference"><a href="https://en.bitcoin.it#cite_note-EbitE10-25">[25]</a></sup>
              </th>
              <td> 18,000,000 </td>
              <td> 11100 </td>
              <td> 3440 </td>
              <td> 1620 </td>
              <td> 5230 </td>
              <td className={styles.tableYes}>Yes </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> No </td>
            </tr>
            <tr>
              <th> Drillbit
              </th>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/CoinTerra" title="CoinTerra">CoinTerra</a> TerraMiner IV
              </th>
              <td> 1,600,000 </td>
              <td className={styles.tableWarn}> </td>
              <td> 1066.67 </td>
              <td> 2100 </td>
              <td> 1500 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableYes}>docs, code, samples </td>
            </tr>
            <tr>
              <th> BTC Garden AM-V1 616 GH/s<sup id="cite_ref-btcgarden_21-1" className="reference"><a href="https://en.bitcoin.it#cite_note-btcgarden-21">[21]</a></sup>
              </th>
              <td> 616,000 </td>
              <td> 951 </td>
              <td> 1760 </td>
              <td> 648 </td>
              <td> 350<sup id="cite_ref-nopsu_2-7" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> RPi GPIO </td>
              <td className={styles.tableNo}> No </td>
            </tr>
            <tr>
              <th> BTC Garden AM-V1 310 GH/s<sup id="cite_ref-btcgarden_21-0" className="reference"><a href="https://en.bitcoin.it#cite_note-btcgarden-21">[21]</a></sup>
              </th>
              <td> 310,000 </td>
              <td> 954 </td>
              <td> 1003 </td>
              <td> 324 </td>
              <td> 309<sup id="cite_ref-nopsu_2-6" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> RPi GPIO </td>
              <td className={styles.tableNo}> No </td>
            </tr>
            <tr>
              <th> Blue Fury
              </th>
              <td> 2,500 </td>
              <td> 1000 </td>
              <td> 17.8 </td>
              <td> 2.5 </td>
              <td> 140 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> Black Arrow Prospero X-3
              </th>
              <td> 2,000,000 </td>
              <td> 1000 </td>
              <td> 333 </td>
              <td> 2000 </td>
              <td> 6000 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>? </td>
            </tr>
            <tr>
              <th> Black Arrow Prospero X-1
              </th>
              <td> 100,000 </td>
              <td> 1000 </td>
              <td> 270 </td>
              <td> 100 </td>
              <td> 370 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>docs, samples </td>
            </tr>
            <tr>
              <th> Bitmine.ch Avalon Clone 85GH
              </th>
              <td> 85,000 </td>
              <td className={styles.tableWarn}> </td>
              <td> 13 </td>
              <td> 650 </td>
              <td> 6489<sup id="cite_ref-20" className="reference"><a href="https://en.bitcoin.it#cite_note-20">[20]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet, Wifi, USB </td>
              <td className={styles.tableNo}> code </td>
            </tr>
            <tr>
              <th> BitFury S.B.
              </th>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> RPi GPIO </td>
              <td className={styles.tableNo}> No </td>
            </tr>
            <tr>
              <th> bi*fury
              </th>
              <td> 5,000 </td>
              <td> 1,176 </td>
              <td> 24 </td>
              <td> 4.25 </td>
              <td> 209 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> BFL Single 'SC'
              </th>
              <td> 60,000 </td>
              <td> 250 </td>
              <td> 46.18 </td>
              <td> 240 </td>
              <td> 1299 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> BFL SC 5Gh/s
              </th>
              <td> 5,000 </td>
              <td> 166 </td>
              <td> 18.24 </td>
              <td> 30 </td>
              <td> 274 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> BFL SC 50 Gh/s
              </th>
              <td> 50,000 </td>
              <td> 166 </td>
              <td> 50 </td>
              <td> 300</td>
              <td> 984 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> BFL SC 25 Gh/s
              </th>
              <td> 25,000 </td>
              <td> 166 </td>
              <td> 20.00 </td>
              <td> 150 </td>
              <td> 1249 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> BFL SC 10 Gh/s
              </th>
              <td> 10,000 </td>
              <td className={styles.tableWarn}> </td>
              <td> 200 </td>
              <td className={styles.tableWarn}> </td>
              <td> 50 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> BFL Monarch 700GH/s<sup id="cite_ref-bflmonarch_19-0" className="reference"><a href="https://en.bitcoin.it#cite_note-bflmonarch-19">[19]</a></sup>
              </th>
              <td> 700,000 </td>
              <td> 1428 </td>
              <td> 508 </td>
              <td> 490 </td>
              <td> 1379 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> PCIe, USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> BFL Little Single
              </th>
              <td> 30,000 </td>
              <td className={styles.tableWarn}> </td>
              <td> 46.22 </td>
              <td className={styles.tableWarn}> </td>
              <td> 649 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> BFL 500 GH/s Mini Rig SC
              </th>
              <td> 500,000 </td>
              <td> 185 </td>
              <td className={styles.tableWarn}> </td>
              <td> 2700 </td>
              <td> 22484 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Wifi </td>
              <td className={styles.tableYes}>docs, samples </td>
            </tr>
            <tr>
              <th> BFL 230 GH/s Rack Mount<sup id="cite_ref-bf250_18-0" className="reference"><a href="https://en.bitcoin.it#cite_note-bf250-18">[18]</a></sup>
              </th>
              <td> 230,000 </td>
              <td className={styles.tableWarn}> </td>
              <td> 500</td>
              <td className={styles.tableWarn}> </td>
              <td> 399 (used) </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableWarn}>docs </td>
            </tr>
            <tr>
              <th> Avalon821
              </th>
              <td> 11,000,000 </td>
              <td> 9170 </td>
              <td> 3800 </td>
              <td> 1200 </td>
              <td> 2900 </td>
              <td className={styles.tableYes}>Bulk only </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>? </td>
            </tr>
            <tr>
              <th> Avalon761
              </th>
              <td> 8,800,000 </td>
              <td> 6670 </td>
              <td> 4730 </td>
              <td> 1320 </td>
              <td> 1860 </td>
              <td className={styles.tableYes}>Yes </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>? </td>
            </tr>
            <tr>
              <th> Avalon741
              </th>
              <td> 7,300,000 </td>
              <td> 6350 </td>
              <td> 5035 </td>
              <td> 1150 </td>
              <td> 1450 </td>
              <td className={styles.tableYes}>Yes </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>? </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Avalon721" title="Avalon721">Avalon721</a>
              </th>
              <td> 6,000,000 </td>
              <td> 6000 </td>
              <td className={styles.tableWarn}> </td>
              <td> 1000 </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableNo}> No </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>? </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Avalon6" title="Avalon6">Avalon6</a>
              </th>
              <td> 3,500,000 </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td> 1080 </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>? </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Avalon3" title="Avalon3">Avalon3</a>
              </th>
              <td> 800,000 </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB or Ethernet </td>
              <td className={styles.tableYes}>code, docs, samples </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Avalon2" title="Avalon2">Avalon2</a>
              </th>
              <td> 300,000 </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td className={styles.tableWarn}> </td>
              <td> 3075 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB or Ethernet </td>
              <td className={styles.tableYes}>code, docs, samples </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Avalon" title="Avalon">Avalon</a> Batch 3
              </th>
              <td> 82,000<sup id="cite_ref-avalon_17-3" className="reference"><a href="https://en.bitcoin.it#cite_note-avalon-17">[17]</a></sup> </td>
              <td> 117 </td>
              <td> 54.70 </td>
              <td> 700 </td>
              <td> 1499<sup id="cite_ref-avalon_17-4" className="reference"><a href="https://en.bitcoin.it#cite_note-avalon-17">[17]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet, Wifi </td>
              <td className={styles.tableNo}> code </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Avalon" title="Avalon">Avalon</a> Batch 2
              </th>
              <td> 82,000<sup id="cite_ref-avalon_17-1" className="reference"><a href="https://en.bitcoin.it#cite_note-avalon-17">[17]</a></sup> </td>
              <td> 117 </td>
              <td> 54.70 </td>
              <td> 700 </td>
              <td> 1499<sup id="cite_ref-avalon_17-2" className="reference"><a href="https://en.bitcoin.it#cite_note-avalon-17">[17]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet, Wifi </td>
              <td className={styles.tableNo}> code </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/Avalon" title="Avalon">Avalon</a> Batch 1
              </th>
              <td> 66,300 <sup id="cite_ref-AvalonPowerUsage_16-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AvalonPowerUsage-16">[16]</a></sup> </td>
              <td> 107 </td>
              <td> 52.34 </td>
              <td> 620<sup id="cite_ref-AvalonPowerUsage_16-1" className="reference"><a href="https://en.bitcoin.it#cite_note-AvalonPowerUsage-16">[16]</a></sup> </td>
              <td> 1299<sup id="cite_ref-avalon_17-0" className="reference"><a href="https://en.bitcoin.it#cite_note-avalon-17">[17]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet, Wifi </td>
              <td className={styles.tableNo}> code </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/ASICMiner" title="ASICMiner">ASICMiner</a> BE Tube <sup id="cite_ref-AM_tube_14-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AM_tube-14">[14]</a></sup>
              </th>
              <td> 800,000 </td>
              <td> 888 </td>
              <td> 2500 </td>
              <td> 900 </td>
              <td> 320<sup id="cite_ref-nopsu_2-4" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Proprietary </td>
              <td className={styles.tableWarn}>samples </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/ASICMiner" title="ASICMiner">ASICMiner</a> BE Sapphire
              </th>
              <td> 336 </td>
              <td> 130 </td>
              <td> 17<sup id="cite_ref-bcprice_13-3" className="reference"><a href="https://en.bitcoin.it#cite_note-bcprice-13">[13]</a></sup> </td>
              <td> 2.55 </td>
              <td> 20<sup id="cite_ref-bcprice_13-4" className="reference"><a href="https://en.bitcoin.it#cite_note-bcprice-13">[13]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>samples </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/ASICMiner" title="ASICMiner">ASICMiner</a> BE Prisma <sup id="cite_ref-AM_prisma_15-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AM_prisma-15">[15]</a></sup>
              </th>
              <td> 1,400,000 </td>
              <td> 1333 </td>
              <td> 2333 </td>
              <td> 1100 </td>
              <td> 600<sup id="cite_ref-nopsu_2-5" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Proprietary </td>
              <td className={styles.tableNo}> No </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/ASICMiner" title="ASICMiner">ASICMiner</a> BE Cube
              </th>
              <td> 30,000 </td>
              <td> 150 </td>
              <td> 55 </td>
              <td> 200 </td>
              <td> 550<sup id="cite_ref-nopsu_2-3" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup><sup id="cite_ref-bcprice_13-2" className="reference"><a href="https://en.bitcoin.it#cite_note-bcprice-13">[13]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>samples </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/ASICMiner" title="ASICMiner">ASICMiner</a> BE Blade
              </th>
              <td> 10,752 </td>
              <td> 129 </td>
              <td> 28<sup id="cite_ref-bcprice_13-0" className="reference"><a href="https://en.bitcoin.it#cite_note-bcprice-13">[13]</a></sup> </td>
              <td> 83 </td>
              <td> 350<sup id="cite_ref-nopsu_2-2" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup><sup id="cite_ref-bcprice_13-1" className="reference"><a href="https://en.bitcoin.it#cite_note-bcprice-13">[13]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableWarn}>samples </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> U3 <sup id="cite_ref-AntMinerU3_12-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerU3-12">[12]</a></sup>
              </th>
              <td> 63,000 </td>
              <td> 1,000 </td>
              <td> 1658 </td>
              <td> 63 </td>
              <td> 38 </td>
              <td className={styles.tableYes}>Yes </td>
              <td> USB </td>
              <td className={styles.tableNo}> code </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> U2+ <sup id="cite_ref-AntMinerU2_11-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerU2-11">[11]</a></sup>
              </th>
              <td> 2,000 </td>
              <td> 1,000 </td>
              <td> 115 </td>
              <td> 2 </td>
              <td> 17 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableNo}> code </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> U1 <sup id="cite_ref-AntMinerU1_10-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerU1-10">[10]</a></sup>
              </th>
              <td> 1,600 </td>
              <td> 800 </td>
              <td> 55 </td>
              <td> 2 </td>
              <td> 29 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> USB </td>
              <td className={styles.tableYes}>code, samples </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> S9 <sup id="cite_ref-AntMinerS9_9-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerS9-9">[9]</a></sup>
              </th>
              <td> 14,000,000 </td>
              <td> 10182 </td>
              <td> 5833 </td>
              <td> 1,375 </td>
              <td> 2,400 </td>
              <td className={styles.tableYes}>Yes </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> GPL infringement </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> S7 <sup id="cite_ref-AntMinerS7_8-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerS7-8">[8]</a></sup>
              </th>
              <td> 4,860,000 </td>
              <td> 4000 </td>
              <td> 2666 </td>
              <td> 1,210 </td>
              <td> 1,823</td>
              <td className={styles.tableNo}> No </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> GPL infringement </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> S5+ <sup id="cite_ref-AntMinerS5Plus_7-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerS5Plus-7">[7]</a></sup>
              </th>
              <td> 7,722,000 </td>
              <td> 2247 </td>
              <td> 3347 </td>
              <td> 3,436 </td>
              <td> 2,307 </td>
              <td className={styles.tableNo}> No </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> GPL infringement </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> S5 <sup id="cite_ref-AntMinerS5_6-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerS5-6">[6]</a></sup>
              </th>
              <td> 1,155,000 </td>
              <td> 1957 </td>
              <td> 3121 </td>
              <td> 590 </td>
              <td> 370 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> GPL infringement </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> S4 <sup id="cite_ref-AntMinerS4_5-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerS4-5">[5]</a></sup>
              </th>
              <td> 2,000,000 </td>
              <td> 1429</td>
              <td> 1429 </td>
              <td> 1400 </td>
              <td> 1400 </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> GPL infringement </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> S3 <sup id="cite_ref-AntMinerS3_4-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerS3-4">[4]</a></sup>
              </th>
              <td> 441,000 </td>
              <td> 1300</td>
              <td> 1154</td>
              <td> 340</td>
              <td> 382<sup id="cite_ref-nopsu_2-1" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> GPL infringement </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> S2 <sup id="cite_ref-AntMinerS2_3-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerS2-3">[3]</a></sup>
              </th>
              <td> 1,000,000 </td>
              <td> 900</td>
              <td> 442</td>
              <td> 1100</td>
              <td> 2259</td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> GPL infringement </td>
            </tr>
            <tr>
              <th> <a href="https://en.bitcoin.it/wiki/AntMiner" title="AntMiner">AntMiner</a> S1 <sup id="cite_ref-AntMinerS1_1-0" className="reference"><a href="https://en.bitcoin.it#cite_note-AntMinerS1-1">[1]</a></sup>
              </th>
              <td> 180,000 </td>
              <td> 500 </td>
              <td> 800</td>
              <td> 360 </td>
              <td> 299<sup id="cite_ref-nopsu_2-0" className="reference"><a href="https://en.bitcoin.it#cite_note-nopsu-2">[2]</a></sup> </td>
              <td className={styles.tableNo}> Discontinued </td>
              <td> Ethernet </td>
              <td className={styles.tableNo}> GPL infringement </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}