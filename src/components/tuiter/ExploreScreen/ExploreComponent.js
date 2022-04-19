import React from 'react'
import PostSummaryList from '../PostSummaryList'

const ExploreComponent = () => {
  const navList = [
    "Home","Trending","News","Sports","Entertainment"
];

return (
    <div className="col-10 col-md-10 col-lg-8 col-xl-6">
    <div className="row search" style={{margin: '12px 0', backgroundColor: '#fff'}}>
          <form className="bs-example bs-example-form">
              <div className="input-group">
                  <i className="fa fa-search" style={{lineHeight: '36px'}}></i>
                  <input type="text" className="form-control" placeholder="Search Tuiter" />
              </div>
          </form>
     </div>
     <ul className="nav mb-2 nav-tabs">
          {navList.map((item,index) => 
              <li className={item === 'Trending'?"active nav-link":"nav-link"} key={index} >{item}</li>
          )}
     </ul>
      <div className="poster-wrapper">
          <img style={{width: '100%'}} src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/30/thumbs_b_c_a4a6996640e91d4ff86a71f5d9d9f84b.jpg?v=225920" alt='' />
      </div>
      <PostSummaryList />
    </div>
  );
}
export default ExploreComponent;
