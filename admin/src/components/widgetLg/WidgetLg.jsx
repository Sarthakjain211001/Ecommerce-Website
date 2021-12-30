import React from 'react'
import "./WidgetLg.css"

const WidgetLg = () => {

    const Button = (props)=>{
        const {type} = props;
        return <button className={'widgetLgButton ' + type}> {type} </button>
    }

    return (
        <div className='WidgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className='widgetLgTable'>
             <tr className="widgetLgTr">
                 <th className="widgetLgTh">Customer</th>
                 <th className="widgetLgTh">Date</th>
                 <th className="widgetLgTh">Amount</th>
                 <th className="widgetLgTh">Status</th>
             </tr>
             <tr className="widgetLgTr">
                 <td className="widgetLgUser">
                     <img src="https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png" alt="" className="widgetLgImg" /> 
                     <span className="widgetLgName">Susan Carol</span>
                   </td>
                     <td className="widgetLgDate">2 Jun 2021</td>
                     <td className="widgetLgAmount">Rs 800</td>
                     <td><Button type="Approved"/>  </td> {/*Passing props in the Button*/}
                 
             </tr>
             <tr className="widgetLgTr">
                 <td className="widgetLgUser">
                     <img src="https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png" alt="" className="widgetLgImg" /> 
                     <span className="widgetLgName">Susan Carol</span>
                </td>
                     <td className="widgetLgDate">2 Jun 2021</td>
                     <td className="widgetLgAmount">Rs 800</td>
                     <td><Button type="Declined"/>  </td> {/*Passing props in the Button*/}
                 
             </tr>
             <tr className="widgetLgTr">
                 <td className="widgetLgUser">
                     <img src="https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png" alt="" className="widgetLgImg" /> 
                     <span className="widgetLgName">Susan Carol</span>
                </td>
                     <td className="widgetLgDate">2 Jun 2021</td>
                     <td className="widgetLgAmount">Rs 800</td>
                     <td><Button type="Pending"/>   </td>{/*Passing props in the Button*/}
                
             </tr>
             <tr className="widgetLgTr">
                 <td className="widgetLgUser">
                
                     <img src="https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png" alt="" className="widgetLgImg" /> 
                     <span className="widgetLgName">Susan Carol</span>
                  </td>
                     <td className="widgetLgDate">2 Jun 2021</td>
                     <td className="widgetLgAmount">Rs 800</td>
                     <td><Button type="Approved"/>  </td> {/*Passing props in the Button*/}
                 
             </tr>
             <tr className="widgetLgTr">
                 <td className="widgetLgUser">
                     <img src="https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png" alt="" className="widgetLgImg" /> 
                     <span className="widgetLgName">Susan Carol</span>
                  </td>
                     <td className="widgetLgDate">2 Jun 2021</td>
                     <td className="widgetLgAmount">Rs 800</td>
                   <td>  <Button type="Pending"/> </td>  {/*Passing props in the Button*/}
                 
             </tr>
             </table>
        </div>
    )
}
 
export default WidgetLg
