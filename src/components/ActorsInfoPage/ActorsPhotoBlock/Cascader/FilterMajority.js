import React from 'react';
import { Checkbox } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAllRoles, selectAnyRole } from '../../../../store/FilterRoles/actions.js';

const CheckboxGroup = Checkbox.Group;

class FilterCheckbox extends React.Component {
  render() {
    const plainOptions = ['Maincast', 'Secondary'];
    const { indeterminate, checkAll, checkedList, selectAllRoles, selectAnyRole } = this.props;

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
}

const mapStateToProps = (state) => {
  return {
    checkedList: state.filterReducer.checkedList,
    indeterminate: state.filterReducer.indeterminate,
    checkAll: state.filterReducer.checkAll,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectAllRoles: bindActionCreators(selectAllRoles, dispatch),
    selectAnyRole: bindActionCreators(selectAnyRole, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCheckbox);
