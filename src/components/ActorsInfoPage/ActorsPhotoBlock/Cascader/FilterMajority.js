import React from 'react';
import { Checkbox } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAllRoles, selectAnyRole } from '../../../../store/FilterRoles/actions.js';

const CheckboxGroup = Checkbox.Group;

function FilterCheckbox(props) {
  const plainOptions = ['Maincast', 'Secondary'];

  const { indeterminate, checkAll, checkedList, selectAllRoles, selectAnyRole } = props;
  console.log(props);
  return (
    <div>
      <div className='site-checkbox-all-wrapper'>
        <Checkbox
          indeterminate={indeterminate}
          onChange={() => {
            selectAllRoles(!checkAll);
          }}
          checked={checkAll}
        >
          Check all
        </Checkbox>
      </div>
      <br />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={(e) => {
          selectAnyRole(e);
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    checkedList: state.filter.checkedList,
    indeterminate: state.filter.indeterminate,
    checkAll: state.filter.checkAll,
    loading: state.layout.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectAllRoles: bindActionCreators(selectAllRoles, dispatch),
    selectAnyRole: bindActionCreators(selectAnyRole, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCheckbox);
