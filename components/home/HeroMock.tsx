export default function HeroMock() {
  return (
<div className="stage" aria-hidden="true">
  <div className="frame">
   <div className="bar"><b /><b /><b /><span className="url">app.example.com/reconcile</span></div>
   <div className="app">
    <div className="side">
     <div className="org"><i />Placeholder Co.</div>
     <span className="a-link">Dashboard</span><span className="a-link on">Reconcile <span className="cnt">12</span></span><span className="a-link">Invoices</span><span className="a-link">Bills</span><span className="a-link">Reports</span>
     <small>Connections</small><span className="a-link">QuickBooks</span><span className="a-link">Stripe</span><span className="a-link">Odoo</span>
    </div>
    <div className="main">
     <div className="mh"><div><h4>Bank reconciliation</h4><p>Operating account · Placeholder Co.</p></div><span className="chip">Period 00/2026</span></div>
     <div className="kpis"><div><span>Statement balance</span><b>48,210.00</b></div><div><span>Ledger balance</span><b>48,210.00</b></div><div><span>Difference</span><b>0.00</b></div></div>
     <table><thead><tr><th>Date</th><th>Description</th><th className="a">Amount</th><th>Status</th></tr></thead><tbody>
      <tr><td className="d">00-01</td><td>Stripe payout</td><td className="a">1,240.00</td><td><span className="pill ok">Matched</span></td></tr>
      <tr><td className="d">00-02</td><td>Vendor bill #0000</td><td className="a">−382.50</td><td><span className="pill ok">Matched</span></td></tr>
      <tr className="sel"><td className="d">00-03</td><td>Stripe fees</td><td className="a">−36.12</td><td><span className="pill rv">Review</span></td></tr>
      <tr><td className="d">00-04</td><td>Customer invoice #0000</td><td className="a">2,900.00</td><td><span className="pill ok">Matched</span></td></tr>
      <tr><td className="d">00-05</td><td>Payroll transfer</td><td className="a">−5,410.00</td><td><span className="pill ok">Matched</span></td></tr>
      <tr><td className="d">00-06</td><td>Stripe refund</td><td className="a">−120.00</td><td><span className="pill rv">Review</span></td></tr>
      <tr><td className="d">00-07</td><td>Software subscription</td><td className="a">−79.00</td><td><span className="pill ok">Matched</span></td></tr>
      <tr><td className="d">00-08</td><td>Stripe payout</td><td className="a">3,615.40</td><td><span className="pill ok">Matched</span></td></tr>
     </tbody></table>
    </div>
   </div>
  </div>
  <div className="fc fc2"><h5>Payout → ledger <span className="pill ok">Matched</span></h5>
   <div className="row">Gross<b>3,720.00</b></div><div className="row">Fees<b>−104.60</b></div><div className="row">Net to bank<b>3,615.40</b></div></div>
  <div className="fc fc1"><h5>Month-end checklist <span className="cnt">2/4</span></h5>
   <div className="ck y"><i />Bank accounts reconciled</div><div className="ck y"><i />Stripe payouts matched</div><div className="ck"><i />Accruals posted</div><div className="ck"><i />Reports reviewed</div>
   <div className="prog"><i /></div></div>
 </div>
  );
}
