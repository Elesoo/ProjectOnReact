import React from 'react'
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { setGalleryAC, setCurrentPageAC, setTotalPhotosCountAC } from '../../redux/Reducer/galleryReducer'
import { Row, Col } from 'antd';
import { Pagination } from 'antd';
import styles from './style.module.css'


const Gallery = (props) => {

  if (props.photos.length === 0) {
    authAPI.getPhotos(props.currentPage, props.pageSize).then(response => {
      console.log(response);
      props.setGalleryAC(response.data.data)
      props.setTotalPhotosCountAC(response.data.totalItems)
      console.log(response.data.totalItems);
    });
  }

  const onChangePage = (page) => {
    setCurrentPageAC(page);
    authAPI.getPhotos(page, props.pageSize).then(response => {
      console.log(response);
      props.setGalleryAC(response.data.data)
    });
  }

  return (
    <div>
      <Row justify="center">
        {props.photos.map(p => 
        <Col key={p.id} span={6}>
          <div>
            <img className={styles.imgs} src={p.file} alt={p.name} />
            <p>{p.name}</p>
          </div>
        </Col>)
        }
      </Row>
      <Row justify="center" style={{ marginBottom: '30px' }}>
        <Pagination defaultCurrent={props.currentPage} defaultPageSize={props.pageSize} total={props.totalPhotosCount} onChange={onChangePage} />
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  photos: state.galleryPage.photos,
  pageSize: state.galleryPage.pageSize,
  totalPhotosCount: state.galleryPage.totalPhotosCount,
  currentPage: state.galleryPage.currentPage
});

export default connect(mapStateToProps, { setGalleryAC, setCurrentPageAC, setTotalPhotosCountAC })(Gallery)