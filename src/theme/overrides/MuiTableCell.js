import palette from '../palette';
import typography from '../typography';

export default {
  root: {
    ...typography.body2,
    borderTop: `1px solid ${palette.divider}`,
    borderBottom: `1px solid ${palette.divider}`,
    borderRight: `1px solid ${palette.divider}`,
    borderLeft: `1px solid ${palette.divider}`,
  },
};
