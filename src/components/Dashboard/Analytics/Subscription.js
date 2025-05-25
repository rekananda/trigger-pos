import Link from "next/link";

const Subscription = () => {
    return (
        <>
            <div className="col-sm-6 col-lg-3">
                <div className="card equal-card">
                    <div className="card-body card-image">
                        <div className="premiere-card">
                            <div className="">
                                <h6 className="mb-0 f-w-400 text-dark"> Current Subscription Plan</h6>
                                <h3 className="text-secondary text-nowrap f-s-24 f-w-600">Premiere <Link
                                    href="/apps/pricing" className="text-primary">Pro</Link></h3>
                            </div>
                            <div className="premiere-image">
                                <img src="/images/dashboard/analytics/02.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscription;
