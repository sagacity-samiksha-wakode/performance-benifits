describe('performance-benifits-widget-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=performancetablecomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-sagacity-performance-table').should('exist');
  });
});