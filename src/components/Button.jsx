import { forwardRef } from "react";

const Button = forwardRef(function Button(
  {
    variant = "filled", 
    iconOnly = false,   
    iconLeft,           
    iconRight,          
    disabled = false,   
    loading = false,    
    className = "",    
    children,       
    ...rest            
  },
  ref
) {

  // styles every button always gets
  // default size is h-10 w-40 — override with className if needed
  const base = `
    inline-flex items-center justify-center gap-2
    h-10 w-40 px-5 rounded-xs text-sm font-rethink font-normal
    transition-all duration-150 cursor-pointer select-none
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
  `;

  // FILLED BUTTON STATE 
  const filled = `
    bg-[#FE7C0B] text-white
    hover:bg-[#F57708]
    active:scale-95 `;

  // OUTLINE BUTTON STATE = transparent background, grey border, dark text. On hover fills the button with orange color and switches text to white
  const outline = `
    bg-transparent text-[#0E0D0C] border border-[#C6C6C6]
    hover:bg-[#FE7C0B] hover:text-white
    active:scale-95
  `;

  // pick the right variant based on the variant prop
  const variantStyles = { filled, outline };

  // DISABLED/LOADING STATE — blocks all clicks
  const disabledStyles =
    disabled || loading
      ? "!bg-[#C6C6C6] !text-white !border-[#C6C6C6] cursor-not-allowed pointer-events-none"
      : "";

  // ICON ONLY STATE - override size with className if needed e.g. className="w-12 h-12"
  const iconOnlyStyles = iconOnly ? "w-10 h-10 px-0" : "";
  const finalStyles = `${base} ${variantStyles[variant]} ${iconOnlyStyles} ${disabledStyles} ${className}`;

  return (
    <button
      ref={ref}
      className={finalStyles}
      disabled={disabled || loading}
      {...rest}
    >

      {/* SPINNING/LOADER STATE — only shows when loading={true} */}
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 22 6.477 22 12h-4z" />
        </svg>
      )}

      {/* icon on the left — only shows if iconLeft was passed in */}
      {!loading && iconLeft && <span>{iconLeft}</span>}

      {/* button label text — hidden when iconOnly is true */}
      {!iconOnly && <span>{children}</span>}

      {/* icon only — children is the icon itself */}
      {iconOnly && !loading && <span>{children}</span>}

      {/* icon on the right — only shows if iconRight was passed in */}
      {!loading && !iconOnly && iconRight && <span>{iconRight}</span>}

    </button>
  );
});

export default Button;



// BUTTON VARIANTS — ALL FORMATS
// copy and paste whichever one you need
//
// FIRST — import Button and your icons at the top of your file
//
//   import Button from "../components/Button";
//   import searchIcon from "../assets/icons/search.svg";
//   import SaveIcon from "../assets/icons/save.svg";
//   import SavedIcon from "../assets/icons/saved.svg";
//
//
// 1. FILLED BUTTON — it's used for the main action on a page
//
//   <Button>Find Property</Button>
//
//
// 2. OUTLINE BUTTON — used for secondary actions
//
//   <Button variant="outline">Save Search</Button>
//
//
// 3. FILLED BUTON WITH ICON ON THE LEFT
//
//   <Button iconLeft={<img src={searchIcon} alt="" width={16} height={16} />}>
//     Search
//   </Button>
//
//
// 4. FILLED BUTTON WITH ICON ON THE RIGHT
//
//   <Button iconRight={<img src={arrowIcon} alt="" width={16} height={16} />}>
//     Browse
//   </Button>
//
//
// 5. OUTLINE BUTTON WITH ICON ON THE LEFT
//
//   <Button variant="outline" iconLeft={<img src={searchIcon} alt="" width={16} height={16} />}>
//     Search
//   </Button>
//
//
// 6. OUTLINE BUTTON  WITH ICON ON THE RIGHT
//
//   <Button variant="outline" iconRight={<img src={arrowIcon} alt="" width={16} height={16} />}>
//     Browse
//   </Button>
//
//
// 7. ICON ONLY — FILLED BUTTON
//   always add aria-label so screen readers know what the button does
//
//   <Button iconOnly aria-label="Save property">
//     <img src={heartIcon} alt="" width={18} height={18} />
//   </Button>
//
//
// 8. ICON ONLY — OUTLINE BUTTON
//
//   <Button iconOnly variant="outline" aria-label="Save property">
//     <img src={heartIcon} alt="" width={18} height={18} />
//   </Button>
//
//
// 9. DISABLED — FILLED BUTTON
//   button turns grey automatically, cannot be clicked
//
//   <Button disabled>Unavailable</Button>
//
//
// 10. DISABLED — OUTLINE BUTTON
//
//   <Button variant="outline" disabled>Unavailable</Button>
//
//
// 11. LOADING — FILLED BUTTON
//   shows a spinner, cannot be clicked
//
//   <Button loading>Submitting...</Button>
//
//
// 12. LOADING — OUTLINE BUTTON
//
//   <Button variant="outline" loading>Saving...</Button>
//
//
// 13. FULL WIDTH — for forms and mobile screens
//
//   <Button className="!w-full">Sign In</Button>
//
//
//IMPORTANT!!

//   1. Use FILLED for the main action on a page (one per section)
//      Use OUTLINE for secondary actions
//
//   2. ALWAYS add aria-label on icon only buttons
//      <Button iconOnly aria-label="describe what it does">
//
//   3. To override the default size use className with !
//      <Button className="!w-full">Sign In</Button>
//      <Button className="!w-48 !h-12">List Property</Button>
//
//   4. Don't edit Button.jsx just to change size for one page
//      use className with ! from outside instead
