import React from 'react'
import './ClassicInput.scss'

function ClassicInput({
  leftIcon,
  rightIcon,
  IconWidth,
  Iconheight,
  classNameIcon,
  classNameLeftIcon,
  rightClick,
  leftClick,
  centerInput = false,
  name,
  classNameContainer,
  styleContainer,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  defaultValue,
  max,
  min,
  styleInput,
  classNameinput,
  error,
  rightIconClassName,
  leftIconClassName,
}) {
  return (
    <div key={name} className="classic-input">
      <div className="padv5">
        <div
          className={`${centerInput ? 'rel' : 'flex fdr aic jcc f12 '} ${classNameContainer} padv3`}
          style={styleContainer}
        >
          {leftIcon ? (
            <div className={`${classNameLeftIcon || 'f1 flex jcc aic'}`}>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <img
                src={leftIcon}
                className={leftIconClassName}
                onClick={leftClick}
                width={IconWidth || 20}
                height={Iconheight || 20}
                alt="defalut"
              />
            </div>
          ) : null}
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            className={`bgtransparent ${
              centerInput ? 'txtac abs child_centred' : 'f10'
            } ${classNameinput}`}
            onChange={onChange ? e => onChange(e.currentTarget.value) : e => e}
            onBlur={onBlur || (e => e)}
            defaultValue={defaultValue}
            style={{ border: 'none', outline: 'none', ...styleInput }}
            max={max || null}
            min={!!min || min === 0 ? min : null}
          />
          {rightIcon ? (
            <div className={`${classNameIcon || 'f1 flex jcc aic'}`}>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <img
                src={rightIcon}
                className={rightIconClassName}
                onClick={rightClick}
                width={IconWidth || 20}
                height={Iconheight || 20}
                alt="defalut"
              />
            </div>
          ) : null}
        </div>
        <p className="fs12 second_red"> {error !== '' ? error : ''}</p>
      </div>
    </div>
  )
}

export default ClassicInput
