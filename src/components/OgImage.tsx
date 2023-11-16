import * as React from 'react'

type Props = {
  title: string
  img: {
    src: string
    width: number
    height: number
  }
}

const OgImage = ({ title, img }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: 48,
        height: '100%',
        backgroundColor: '#2e3440',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          // backgroundColor: 'white',
          color: '#cbd5e0',
          // padding: 48,
          // borderRadius: 12,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 24,
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 16,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 64,
                maxWidth: 600,
                width: 600,
                fontWeight: 600,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                color: '#76c2af',
              }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/1021430?v=4"
                alt="TkDodo"
                width={120}
                height={120}
                style={{ borderRadius: '50%', marginRight: 16 }}
              />
              by TkDodo
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              {...img}
              style={{
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OgImage
