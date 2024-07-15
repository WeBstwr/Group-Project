test('renders the blog container', () => {
    render(<Blog />);
    

    const blogContainer = screen.getByRole('article');
    expect(blogContainer).toBeInTheDocument();
    
   
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('UI Interactions of the Week');
  
   
    const date = screen.getByText(/12 feb 2019/i);
    expect(date).toBeInTheDocument();
  
    
    const subtitle = screen.getByText(/Express, Handlebars/i);
    expect(subtitle).toBeInTheDocument();
  
    
    const paragraph = screen.getByText(/Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint/i);
    expect(paragraph).toBeInTheDocument();
  });