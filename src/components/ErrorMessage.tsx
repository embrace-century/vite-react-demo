import { Banner } from '@douyinfe/semi-ui';

type ErrorMessageProps = {
  title: string;
  content: string;
}

export const ErrorMessage = ({ title, content }: ErrorMessageProps) => {
  return (
     <Banner
            fullMode={false}
            title={title}
            type="warning"
            bordered
            description={content}
        >
        </Banner>
  )
}