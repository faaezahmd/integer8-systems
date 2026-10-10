export default function AuditMock() {
  return (
<div className="dm" aria-hidden="true">
   <div className="bar"><b /><b /><b /><span className="url">audit-log</span></div>
   <div className="dmh"><h4>Audit trail · Automated steps</h4><span className="chip">Live</span></div>
   <div className="log"><span className="t">09:00:12</span><i className="dot g"></i><span className="e">Bank feed imported <em>· 214 lines</em></span><span className="w">sync</span></div>
   <div className="log"><span className="t">09:00:47</span><i className="dot g"></i><span className="e">Stripe payout matched <em>· 3,615.40</em></span><span className="w">rule 04</span></div>
   <div className="log"><span className="t">09:01:03</span><i className="dot g"></i><span className="e">Fees posted to 6100 <em>· 104.60</em></span><span className="w">rule 07</span></div>
   <div className="log"><span className="t">09:01:20</span><i className="dot r"></i><span className="e">Refund flagged for review <em>· 120.00</em></span><span className="w">human</span></div>
   <div className="log"><span className="t">09:04:58</span><i className="dot g"></i><span className="e">Review approved <em>· user 00</em></span><span className="w">human</span></div>
   <div className="log"><span className="t">09:05:02</span><i className="dot"></i><span className="e">Journal entry JE-0000 created</span><span className="w">sync</span></div>
   <div className="log"><span className="t">09:05:09</span><i className="dot g"></i><span className="e">Ledger synced <em>· difference 0.00</em></span><span className="w">sync</span></div>
   <div className="dmf"><span>7 events</span><span>Placeholder data</span></div>
  </div>
  );
}
