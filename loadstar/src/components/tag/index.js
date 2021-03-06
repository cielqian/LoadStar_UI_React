
import React, {Component} from 'react';
import { Tag } from 'antd';
const { CheckableTag } = Tag;

class GroupSelectTag extends Component {
  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    
    const value = props.value || {};
    this.state = {
      selectedTags: value.selectedTags || [],
      selectedTagIds: []
    };
    this.triggerChange([]);
  }

  handleChange(tag, checked){
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    const nextSelectedTagIds = nextSelectedTags.map(x => x.id);
    this.setState({ selectedTags: nextSelectedTags });
    this.setState({ selectedTagIds: nextSelectedTagIds });
    this.triggerChange(nextSelectedTags);
  };

  triggerChange = (changeValue) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(changeValue);
    }
  };

  render() {
    const { selectedTags, selectedTagIds } = this.state;
    return (
      <div>
        {
          this.props.tags.map(tag => (
            <CheckableTag key={tag.id}
              checked={selectedTagIds.indexOf(tag.id) > -1}
              onChange={checked => this.handleChange(tag, checked)}>
              {tag.name}
            </CheckableTag>
          ))
        }
      </div>
    );
  }
}
export default GroupSelectTag;
          