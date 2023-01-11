import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEditor, setViewer } from '../slices/idSlice';
import { marked } from 'marked';
import Logo from './Logo';
import { BiExpand } from 'react-icons/bi';
import { AiOutlineShrink } from 'react-icons/ai';

const ViewContainer = () => {
  const { input } = useSelector((state) => state.input);
  const {
    id: { editor, viewer },
  } = useSelector((state) => state);
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  marked.setOptions({
    renderer: new marked.Renderer(),
    breaks: true,
    sanitize: true,
  });

  const toggleHandler = (e) => {
    if (isExpanded) {
      // TODO: dispatch default state to both editor and viewer
      dispatch(setEditor('input-container'));
      dispatch(setViewer('view-container'));
      setIsExpanded(false);
    } else {
      // TODO: dispatch expand event to the viewer and collapse event to editor
      dispatch(setEditor('collapse'));
      dispatch(setViewer('expand-viewer'));
      setIsExpanded(true);
    }
  };

  return (
    <div id={viewer}>
      <div id="view-container-head" className="head">
        <div className="left-head">
          <Logo />
          <p>Previewer</p>
        </div>
        <div className="right-head" onClick={toggleHandler}>
          {isExpanded ? <AiOutlineShrink /> : <BiExpand />}
        </div>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(input) }} />
    </div>
  );
};
export default ViewContainer;
