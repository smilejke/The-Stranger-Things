import React, { useEffect } from 'react';
import { Badge } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { getViews } from '../../../store/Views/actions.js';

function GreetTittle(props) {
  const { biggie, smallie } = props.header;
  const { views, seen } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!seen) {
      dispatch(getViews());
    }
  }, [dispatch, seen]);

  return (
    <div className='content-width'>
      <h2>{biggie}</h2>
      <div className='page-title-smallie-eye'>
        <h4>{smallie}</h4>
        <Badge count={views}>
          <div className='head-example' />
        </Badge>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    views: state.views.viewsCounter,
    seen: state.views.seen,
  };
};

export default connect(mapStateToProps)(GreetTittle);
