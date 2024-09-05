function BreadCrumb({ title, path = [] }) { // Cung cấp giá trị mặc định cho path
    return (
        <div className="breadcrumb-area bg-cover shadow dark text-center text-light"
         style={{ backgroundImage: "url(assets/img/shape/5.jpg)" }}
         >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h1>{title}</h1>
                        <ul className="breadcrumb">
                            {path.map((item, index) => (
                                <li key={index}>
                                    {index < path.length - 1 ? (
                                        <a href={item.href}>{item.label}</a>
                                    ) : (
                                        item.label
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;
