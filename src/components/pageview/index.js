import React, { useState } from "react";
import './page.scss';

const PageView = () => {
    let [itemVisible, toggleItems] = useState(true);
    let [moredropVisible, moreToggle] = useState(false);
    let [vendorVisible, vendorToggle] = useState(false);

    const handleClick = (flag) => {
        itemVisible = flag
        toggleItems(itemVisible)
    };

    const moreClick = () => {
        moreToggle(!moredropVisible)
    }

    const toggleVendordet = () => {
        vendorToggle(!vendorVisible)
    }

    return(
        <div className="page-wrapper">
            <div className="page-wrapper-head">
                <div className="page-head-mail">direct</div>
                <div className="page-head-right">
                    <div className="more-btn">
                        <div className="bgrey" onClick={moreClick}>More</div>
                        {moredropVisible && 
                            <div className="more-dropdown">
                                <span>Export</span>
                                <span>Mark as exported</span>
                                <span>Setup Vendor</span>
                                <span>Flag Invoice</span>
                                <span>Archive Invoice</span>
                                <span>Delete Invoice</span>
                            </div>
                        }
                        
                    </div>
                    <div className="bblue">Approve</div>
                </div>
            </div>
            <div className="page-wrapper-vendor">
                <div className="vendor-head">
                    <span>VENDOR</span>
                    <span>Freguesia Cheese <span className="dropdown-btn" onClick={toggleVendordet}></span></span>
                    <span className="mapped">The vendor is mapped</span>
                </div>
                {vendorVisible && 
                <div className="vendor-body">
                    <div className="vendor-det">
                        <span>Invoice No.</span>
                        <span>0002356</span>
                    </div>
                    <div className="vendor-det">
                        <span>Invoice Type</span>
                        <span>Receipt</span>
                    </div>
                    <div className="vendor-det">
                        <span>Resturant</span>
                        <span>Monty's Cheese Shop</span>
                    </div>
                    <div className="vendor-det total-cont">
                        <div>
                            <span>subtotal</span>
                            <span>$1300.00</span>
                        </div>
                        <div>
                            <span>tax</span>
                            <span>$26.32</span>
                        </div>
                    </div>
                    <div className="vendor-det post-date">
                        <span>Posting Date</span>
                        <span>Jul 14, 2017</span>
                    </div>
                    <div className="vendor-det">
                        <span>Invoice Date</span>
                        <span>Jul 09, 2017</span>
                    </div>
                    <div className="vendor-det">
                        <span>Due Date</span>
                        <span>Sep 09, 2017</span>
                    </div>
                    <div className="vendor-det sub-total-cont">
                        <span>Total</span>
                        <span>$10,000</span>
                    </div>
                    <div className="memo-entry">Click to enter Memo</div>
                </div>
                }
                {!vendorVisible && 
                <div className="vendor-collapsed">
                    <span>0002356</span>
                    <span>Jul 14, 2017</span>
                    <span>Monty's Cheese Shop</span>
                    <div className="vendor-det sub-total-cont">
                        <span>Total</span>
                        <span>$10,000</span>
                    </div>
                </div>
                }
            </div>
            <div className="page-wrapper-body">
                <div className="nav-tab">
                    <div className={`${itemVisible ? 'active' : ''}`} onClick={()=>handleClick(true)}>Line Items</div>
                    <div className={`${!itemVisible ? 'active' : ''}`} onClick={()=>handleClick(false)}>History</div>
                </div>
                {itemVisible && 
                <div className="item-cont">
                    <div className="item-cont-head">
                        <div>Name</div>
                        <div>Quantity</div>
                        <div>Unit Price</div>
                        <div>Total</div>
                    </div>
                    <div className="item-cont-row">
                        <div>
                            <span>Gruyere-greyezer</span>
                            <span>Dairy 4410-6680</span>
                        </div>
                        <div>3</div>
                        <div>$1.00</div>
                        <div>$328.07</div>
                    </div>
                    <div className="item-cont-row">
                        <div>
                            <span>Gruyere-greyezer</span>
                            <span>Dairy 4410-6680</span>
                        </div>
                        <div>3</div>
                        <div>$1.00</div>
                        <div>$328.07</div>
                    </div>
                    <div className="item-cont-row">
                        <div>
                            <span>Gruyere-greyezer</span>
                            <span>Dairy 4410-6680</span>
                        </div>
                        <div>3</div>
                        <div>$1.00</div>
                        <div>$328.07</div>
                    </div>
                    <div className="item-cont-row">
                        <div>
                            <span>Gruyere-greyezer</span>
                            <span>Dairy 4410-6680</span>
                        </div>
                        <div>3</div>
                        <div>$1.00</div>
                        <div>$328.07</div>
                    </div>
                </div>}
                {!itemVisible && 
                    <div className="history-cont">
                        <div className="history-caption">Recent Activity</div>
                        <div className="history-row">
                            <div className="history-event-date">
                                <span>TODAY</span>
                                <span>9:25 AM</span>
                            </div>
                            <div className="history-event-desc">
                                <span>Flagged by John Doe</span>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default PageView