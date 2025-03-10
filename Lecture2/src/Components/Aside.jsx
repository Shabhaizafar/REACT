function Aside(){
    return (
        <aside className="sidebar">
          <h3>Sidebar</h3>
          <div className="sidebar-widget">
            <h4>Recent Posts</h4>
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
              <li>Post 3</li>
            </ul>
          </div>
          <div className="sidebar-widget">
            <h4>Categories</h4>
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          </div>
        </aside>
    )
}

export default Aside;