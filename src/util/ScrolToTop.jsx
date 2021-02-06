import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * Scrolls to top when something changes in the history
 * @param {*} param0 the history
 * @author mjvbarton
 * @since 1.0.0
 */
function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  });

  return (null);
}

export default withRouter(ScrollToTop);