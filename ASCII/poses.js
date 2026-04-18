// --- THE COMMANDER STICK ANIMATION DATABASE ---

const Poses = {
    // 1. THE DEFAULT (Standing guard)
    idle: `
  (o_o) 
  <| |> 
   / \\  `,

    // 2. THE THINKER (When the user is typing)
    typing: `
  (o_o) 
  <| |>_ 
   / \\  `,

    // 3. THE CELEBRATION (Mission Success!)
    happy: `
 \\(^o^)/ 
   | |  
   / \\  `,

    // 4. THE ALERT (Error found / Warning)
    warning: `
  (>_<)  !!
 --| |-- 
  /   \  `,

    // 5. THE SEARCHER (Looking for keys)
    searching: `
  (o_o) 
  /| |  
  / \   `,

    // 6. THE INSANITY MODE (Level 99+)
    insane: `
  (⊙_⊙) 
  <| |> 
  _/ \_ `
};

// Exporting so other files can see it
export default Poses;
