import config from "../../config";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, path }) =>  {
    return (
        <div className="content-header">
			<div className="d-flex align-items-center">
				<div className="mr-auto">
					<h3 className="page-title">{title}</h3>
					<div className="d-inline-block align-items-center">
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to={path}><i className="icon-Home"></i></Link></li>
								<li className="breadcrumb-item" aria-current="page"> <Link to={path}>Home</Link></li>
								<li className="breadcrumb-item active" aria-current="page">{title}</li>
							</ol>
						</nav>
					</div>
				</div>				
			</div>
		</div>
    );
}

BreadCrumb.defaultProps = {
    path: config.routes.home,
};
export default BreadCrumb;