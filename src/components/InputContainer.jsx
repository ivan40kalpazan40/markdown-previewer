import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../slices/inputSlice';
import { setEditor, setViewer } from '../slices/idSlice';
import { prepopulate } from '../utils/utils';
import { BiExpand } from 'react-icons/bi';
import { AiOutlineShrink } from 'react-icons/ai';
import Logo from './Logo';

const InputContainer = () => {
  const dispatch = useDispatch();
  const { editor, viewer } = useSelector((state) => state.id);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHandler = (e) => {
    if (isExpanded) {
      dispatch(setEditor('input-container'));
      dispatch(setViewer('view-container'));
      setIsExpanded(false);
    } else {
      dispatch(setEditor('expand-input'));
      dispatch(setViewer('collapse'));
      setIsExpanded(true);
    }
  };

  return (
    <div id={editor}>
      <div id="input-container-head" className="head">
        <div className="left-head">
          <Logo />
          <p>Editor</p>
        </div>
        <div className="right-head" onClick={toggleHandler}>
          {isExpanded ? <AiOutlineShrink /> : <BiExpand />}
        </div>
      </div>
      <textarea
        name=""
        id="editor"
        onChange={(e) => dispatch(setInput(e.target.value))}
        defaultValue={prepopulate()}
      ></textarea>
    </div>
  );
};
export default InputContainer;
