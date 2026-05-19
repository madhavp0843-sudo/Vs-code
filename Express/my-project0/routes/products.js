
router.get('/pagevisit', (req, res) => {
    const count = req.session.page_count || 0;
   
    req.session.page_count = count + 1;
 
    res.render('product/page_view', { count: req.session.page_count });
  });