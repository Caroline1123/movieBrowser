import {useEffect, useRef, useState, ReactNode} from "react"

interface ReadMoreProps {
    children: ReactNode;
  }

const ReadMore: React.FC<ReadMoreProps> = ({children}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    useEffect(() => {
        const checkTruncate = () => {
          const element = textRef.current;
          if (element) {
            const shouldTruncate = element.scrollHeight > element.clientHeight+2;
            setIsTruncated(shouldTruncate);
          }
        };
        checkTruncate()
        window.addEventListener('resize', checkTruncate);
        return () => window.removeEventListener('resize', checkTruncate);
    }, [children]);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
        };


    return (
        <div className="text-container">
        <p
          className="text"
          ref={textRef}
          style={{
            maxHeight: isExpanded ? 'none' : '5em',
            overflow: 'hidden'
          }}
        >
          {children}
        </p>
        {isTruncated && (
          <span className="read-more" onClick={toggleExpansion}>
            {isExpanded ? '...Read Less' : '...Read More'}
          </span>
        )}
      </div>

    )
}

export { ReadMore }