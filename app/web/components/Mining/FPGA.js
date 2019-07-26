import React, { PureComponent } from 'react';
import styles from './index.less';

export default class ASIC extends PureComponent {
  render() {
    return (
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Product </th>
              <th className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Hash rate<br />[Mhash/s] </th>
              <th className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Efficiency<br />[Mhash/J] </th>
              <th className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Efficiency<br />[Mhash/s/$] </th>
              <th className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Power<br />[W] </th>
              <th className="headerSort" tabIndex="0" role="columnheader button" title="Sort ascending"> Price<br />[$] </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> Avnet Spartan-6 LX150T Development Kit
              </th>
              <td> 100<sup id="cite_ref-38" className="reference"><a href="#cite_note-38">[1]</a></sup> </td>
              <td> </td>
              <td> 0.10 </td>
              <td> </td>
              <td> 995<sup id="cite_ref-39" className="reference"><a href="#cite_note-39">[2]</a></sup> </td>
            </tr>
            <tr>
              <th> Bitcoin Dominator X5000
              </th>
              <td> 100<sup id="cite_ref-bd_40-0" className="reference"><a href="#cite_note-bd-40">[3]</a></sup> </td>
              <td> 14.7 </td>
              <td> 0.22 </td>
              <td> 6.8<sup id="cite_ref-bd_40-1" className="reference"><a href="#cite_note-bd-40">[3]</a></sup> </td>
              <td> 440<sup id="cite_ref-bd_40-2" className="reference"><a href="#cite_note-bd-40">[3]</a></sup> </td>
            </tr>
            <tr>
              <th> BitForce SHA256 Single
              </th>
              <td> 832<sup id="cite_ref-single_41-0" className="reference"><a href="#cite_note-single-41">[4]</a></sup> </td>
              <td> 10.4 </td>
              <td> 1.38 </td>
              <td> 80<sup id="cite_ref-single_41-1" className="reference"><a href="#cite_note-single-41">[4]</a></sup> </td>
              <td> 599<sup id="cite_ref-single_41-2" className="reference"><a href="#cite_note-single-41">[4]</a></sup> </td>
            </tr>
            <tr>
              <th> Butterflylabs Mini Rig
              </th>
              <td> 25,200<sup id="cite_ref-mini_42-0" className="reference"><a href="#cite_note-mini-42">[5]</a></sup> </td>
              <td> 20.16 </td>
              <td> 1.64 </td>
              <td> 1,250<sup id="cite_ref-mini_42-1" className="reference"><a href="#cite_note-mini-42">[5]</a></sup> </td>
              <td> 15,295<sup id="cite_ref-mini2_43-0" className="reference"><a href="#cite_note-mini2-43">[6]</a></sup> </td>
            </tr>
            <tr>
              <th> Digilent Nexys 2 500K
              </th>
              <td> 5<sup id="cite_ref-44" className="reference"><a href="#cite_note-44">[7]</a></sup> </td>
              <td> </td>
              <td> 0.03 </td>
              <td> </td>
              <td> 149<sup id="cite_ref-dig_45-0" className="reference"><a href="#cite_note-dig-45">[8]</a></sup> </td>
            </tr>
            <tr>
              <th> Icarus
              </th>
              <td> 380<sup id="cite_ref-ica_46-0" className="reference"><a href="#cite_note-ica-46">[9]</a></sup> </td>
              <td> 19.79 </td>
              <td> 0.66 </td>
              <td> 19.2<sup id="cite_ref-ica_46-1" className="reference"><a href="#cite_note-ica-46">[9]</a></sup> </td>
              <td> 569<sup id="cite_ref-ica_46-2" className="reference"><a href="#cite_note-ica-46">[9]</a></sup> </td>
            </tr>
            <tr>
              <th> KnCMiner Mars
              </th>
              <td> 6,000 </td>
              <td>&nbsp;??? </td>
              <td> 2.15 </td>
              <td>&nbsp;??? </td>
              <td> 2,795 </td>
            </tr>
            <tr>
              <th> Lancelot<sup id="cite_ref-lan_47-0" className="reference"><a href="#cite_note-lan-47">[10]</a></sup>
              </th>
              <td> 400<sup id="cite_ref-lan1_48-0" className="reference"><a href="#cite_note-lan1-48">[11]</a></sup> </td>
              <td> </td>
              <td> </td>
              <td> 26 </td>
              <td> 350<sup id="cite_ref-lan1_48-1" className="reference"><a href="#cite_note-lan1-48">[11]</a></sup> </td>
            </tr>
            <tr>
              <th> ModMiner Quad
              </th>
              <td> 800<sup id="cite_ref-mmq_49-0" className="reference"><a href="#cite_note-mmq-49">[12]</a></sup> </td>
              <td> 20 </td>
              <td> 0.75 </td>
              <td> 40<sup id="cite_ref-mmq_49-1" className="reference"><a href="#cite_note-mmq-49">[12]</a></sup> </td>
              <td> 1,069<sup id="cite_ref-mmq_49-2" className="reference"><a href="#cite_note-mmq-49">[12]</a></sup> </td>
            </tr>
            <tr>
              <th> Terasic DE2-115
              </th>
              <td> 80<sup id="cite_ref-50" className="reference"><a href="#cite_note-50">[13]</a></sup> </td>
              <td> </td>
              <td> 0.13 </td>
              <td> </td>
              <td> 595<sup id="cite_ref-de2_51-0" className="reference"><a href="#cite_note-de2-51">[14]</a></sup> </td>
            </tr>
            <tr>
              <th> X6500 FPGA Miner
              </th>
              <td> 400<sup id="cite_ref-x6500data_52-0" className="reference"><a href="#cite_note-x6500data-52">[15]</a></sup> </td>
              <td> 23.25 </td>
              <td> 0.72 </td>
              <td> 17.2<sup id="cite_ref-x6500data_52-1" className="reference"><a href="#cite_note-x6500data-52">[15]</a></sup> </td>
              <td> 550<sup id="cite_ref-x65_53-0" className="reference"><a href="#cite_note-x65-53">[16]</a></sup> </td>
            </tr>
            <tr>
              <th> ZTEX USB-FPGA Module 1.15b
              </th>
              <td> 90<sup id="cite_ref-miner_54-0" className="reference"><a href="#cite_note-miner-54">[17]</a></sup> </td>
              <td> </td>
              <td> 0.27 </td>
              <td> </td>
              <td> 325<sup id="cite_ref-55" className="reference"><a href="#cite_note-55">[18]</a></sup>
              </td>
            </tr>
            <tr>
              <th> ZTEX USB-FPGA Module 1.15x
              </th>
              <td> 215<sup id="cite_ref-miner_54-1" className="reference"><a href="#cite_note-miner-54">[17]</a></sup> </td>
              <td> </td>
              <td> 0.52 </td>
              <td> </td>
              <td> 406<sup id="cite_ref-56" className="reference"><a href="#cite_note-56">[19]</a></sup> </td>
            </tr>
            <tr>
              <th> ZTEX USB-FPGA Module 1.15y
              </th>
              <td> 860<sup id="cite_ref-miner_54-2" className="reference"><a href="#cite_note-miner-54">[17]</a></sup> </td>
              <td> </td>
              <td> 0.65 </td>
              <td> </td>
              <td> 1,304<sup id="cite_ref-1.15y_57-0" className="reference"><a href="#cite_note-1.15y-57">[20]</a></sup> </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}